import fs from "fs-extra";
import { Container } from "inversify";
import "reflect-metadata";
import { NotFoundException } from "../../../app/Exceptions/NotFoundException";
import {
  Convert,
  TypescriptMetaModel,
} from "../../../app/Services/generated/TypescriptMetaModel";
import { Reference } from "../../../app/Services/Reference";
import { Repository } from "../../../app/Services/Repository";
import { Settings, settings } from "../../../app/Utils/Settings";

describe("Reference", () => {
  let container: Container;
  let metamodels: TypescriptMetaModel[];

  let reference: Reference;
  let repository: Repository;

  beforeAll(() => {
    container = new Container();

    metamodels = Convert.toTypescriptMetaModel(
      fs.readFileSync(settings.getTyped("metamodel").destination, {
        encoding: "utf8",
      })
    );

    container.bind<Settings>("Settings").toConstantValue(settings);
    container.bind<Repository>("Repository").toConstantValue({} as any);
    container.bind<Reference>("Reference").to(Reference).inSingletonScope();
  });

  beforeEach(() => {
    container.unbind("Repository");
    container.unbind("Reference");

    repository = new Repository(metamodels);

    container.bind<Repository>("Repository").toConstantValue(repository);
    container.bind<Reference>("Reference").to(Reference).inSingletonScope();

    reference = container.get<Reference>("Reference");
  });

  it("should throw exception on unknown entity", () => {
    expect(() => reference.getEntity(123)).toThrowError("Unknown 123");
    expect(() => reference.getEntity(123)).toThrowError(NotFoundException);
  });

  it("should get metamodels", () => {
    const found = reference.getMetaModels();

    expect(found).toBeDefined();
    expect(found.length).toEqual(metamodels.length);
  });

  it("should add all metamodels", () => {
    reference.addAll(metamodels);

    metamodels.forEach((metamodel) => {
      expect(reference.getEntity(metamodel.id)).toBeDefined();
    });
  });

  it("should get entity", () => {
    repository.add(metamodels[0]);
    const found: TypescriptMetaModel = reference.getEntity(
      metamodels[0].id
    ) as any;

    expect(found).toBeDefined();
    expect(found.id).toEqual(metamodels[0].id);
  });

  it("should get entity name", () => {
    const mock: TypescriptMetaModel = {
      FM3: "FM3.Class",
      id: 11111111,
      classes: [],
    } as any;

    repository.add(metamodels[0]);
    repository.add(mock);

    expect(reference.getEntityName(metamodels[0].id)).toEqual(
      metamodels[0].name
    );

    expect(() => reference.getEntityName(mock.id)).toThrowError(
      NotFoundException
    );
    expect(() => reference.getEntityName(mock.id)).toThrowError(
      `Property 'name' not found in entity`
    );
  });

  it("should get entity class basename", () => {
    repository.add(metamodels[0]);

    expect(() =>
      reference.getEntityClassBaseName(metamodels[0].id)
    ).toThrowError(NotFoundException);
    expect(() =>
      reference.getEntityClassBaseName(metamodels[0].id)
    ).toThrowError(`Property 'package' not found in entity`);

    expect(
      reference.getEntityClassBaseName(metamodels[0].classes[0].id)
    ).toEqual("Famix-Traits/TParameterizedTypeUser");
  });

  it("should get entity class path", () => {
    repository.add(metamodels[0]);

    expect(reference.getEntityClassPath(metamodels[0].classes[0].id)).toContain(
      "resources/generated/Famix-Traits/TParameterizedTypeUser"
    );
  });
});

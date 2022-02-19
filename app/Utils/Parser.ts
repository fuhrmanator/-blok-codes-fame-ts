import {
    FetchingJSONSchemaStore,
    InputData,
    jsonInputForTargetLanguage,
    JSONSchemaInput,
    quicktype,
} from 'quicktype-core';

const TARGET_LANGUAGE = 'typescript' as const;

export const parser = {
    json: async ({ name, samples }: { name: string; samples: string[] }) => {
        const input = jsonInputForTargetLanguage(TARGET_LANGUAGE);
        await input.addSource({ name, samples });

        const data = new InputData();
        data.addInput(input);

        return quicktype({ inputData: data, lang: TARGET_LANGUAGE });
    },
    jsonSchema: async ({ name, schema }: { name: string; schema: string }) => {
        const input = new JSONSchemaInput(new FetchingJSONSchemaStore());
        await input.addSource({ name, schema });

        const data = new InputData();
        data.addInput(input);

        return quicktype({ inputData: data, lang: TARGET_LANGUAGE });
    },
};

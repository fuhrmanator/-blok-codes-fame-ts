import { parser } from '../../../app/Utils/Parser';

describe('Parser', () => {
    it('should parse json', async () => {
        const { lines } = await parser.json({ name: 'Sample', samples: ['{"name":"Sample"}'] });
        expect(lines.join('\n')).toMatchSnapshot();
    });

    it('should parse json schema', async () => {
        const { lines } = await parser.jsonSchema({
            name: 'Sample',
            schema: '{"type":"object","properties":{"name":{"type":"string"}}}'
        });

        expect(lines.join('\n')).toMatchSnapshot();
    });
});

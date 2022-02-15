import 'reflect-metadata';
import { App } from './App';

const app = new App();

app.run().then(() => {
    console.log('\x1b[36m%s\x1b[0m', 'Application is running');
});

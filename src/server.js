import app from './app';

import './database/index';
import './database/migrations/20231226230649-alunos';

const port = process.env.APP_PORT;
app.listen(port);

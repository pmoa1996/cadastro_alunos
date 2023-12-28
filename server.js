import app from './app';

import './src/database/index';
import './src/database/migrations/20231226230649-alunos';

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log(`CTRL + Clique em http://localhost:${port}`);
});

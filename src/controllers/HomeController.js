import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'João',
      sobrenome: 'Otavio',
      email: 'jota@gmail.com',
      idade: 45,
      peso: 78,
      altura: 167,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();

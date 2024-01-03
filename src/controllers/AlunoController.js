import Aluno from '../models/Aluno';

class AlunoController {
  // Index
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }

  // Store
  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);

      const { id, nome, email } = aluno;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }

  // Show
  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID Missing'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe.'],
        });
      }

      const {
        id: idAluno, nome, email, idade, peso, altura,
      } = aluno.dataValues;
      return res.json({
        idAluno, nome, email, idade, peso, altura,
      });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID Missing'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe.'],
        });
      }

      await aluno.destroy();

      return res.json({
        apagado: true,
        msg: ['Aluno deletado com sucesso!'],
      });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID Missing'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe.'],
        });
      }

      const alunoAtualizado = await aluno.update(req.body);
      return res.json(alunoAtualizado);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }
}

export default new AlunoController();

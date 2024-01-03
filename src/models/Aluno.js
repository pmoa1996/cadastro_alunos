import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 carcteres.',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 carcteres.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já existe.',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido. O e-mail precisa ser válido.',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número(Ex.:10, 15, 45, etc).',
          },
        },
      },
      peso: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número(Ex.:55 ou 55.50).',
          },
        },
      },
      altura: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Altura precisa ser um número(Ex.:180, 175, 152, etc).',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}

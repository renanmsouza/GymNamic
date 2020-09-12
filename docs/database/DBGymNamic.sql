CREATE TABLE Historicos (
  idHistoricos INTEGER NOT NULL AUTO_INCREMENT,
  Descricao VARCHAR(250) NULL,
  PRIMARY KEY(idHistoricos)
);

CREATE TABLE Modalidades (
  idModalidades INTEGER NOT NULL AUTO_INCREMENT,
  Descricao VARCHAR(250) NULL,
  PRIMARY KEY(idModalidades)
);

CREATE TABLE Graduacao (
  idGraduacao INTEGER NOT NULL AUTO_INCREMENT,
  Descricao VARCHAR(200) NULL,
  Nivel INTEGER NULL,
  Cor VARCHAR(10) NULL,
  PRIMARY KEY(idGraduacao)
);

CREATE TABLE Usuarios (
  idUsuarios INTEGER NOT NULL AUTO_INCREMENT,
  Login VARCHAR(100) NULL,
  Senha VARCHAR(255) NULL,
  PRIMARY KEY(idUsuarios)
);

CREATE TABLE Professores (
  idProfessores INTEGER NOT NULL AUTO_INCREMENT,
  idGraduacao INTEGER NOT NULL,
  Nome VARCHAR(200) NULL,
  DataNascimento DATE NULL,
  CPF VARCHAR(14) NULL,
  RG VARCHAR(20) NULL,
  Cel VARCHAR(15) NULL,
  Fone VARCHAR(15) NULL,
  Email VARCHAR(200) NULL,
  Sexo VARCHAR(1) NULL,
  Status VARCHAR(1) NULL,
  CEP VARCHAR(10) NULL,
  Rua VARCHAR(250) NULL,
  Numero VARCHAR(100) NULL,
  Bairro VARCHAR(200) NULL,
  Cidade VARCHAR(200) NULL,
  Estado VARCHAR(200) NULL,
  PRIMARY KEY(idProfessores),
  INDEX Professor_Graduacao(idGraduacao),
  FOREIGN KEY(idGraduacao)
    REFERENCES Graduacao(idGraduacao)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

CREATE TABLE Aulas (
  idAulas INTEGER NOT NULL AUTO_INCREMENT,
  idProfessores INTEGER NOT NULL,
  Descricao VARCHAR(250) NULL,
  DiaSemana INTEGER NULL,
  Inicio TIME NULL,
  Fim TIME NULL,
  PRIMARY KEY(idAulas),
  INDEX Aula_Professor(idProfessores),
  FOREIGN KEY(idProfessores)
    REFERENCES Professores(idProfessores)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

CREATE TABLE Alunos (
  idAlunos INTEGER NOT NULL AUTO_INCREMENT,
  idModalidades INTEGER NOT NULL,
  idGraduacao INTEGER NOT NULL,
  Nome VARCHAR(200) NULL,
  DataNascimento DATE NULL,
  CPF VARCHAR(14) NULL,
  RG VARCHAR(20) NULL,
  Cel VARCHAR(15) NULL,
  Fone VARCHAR(15) NULL,
  Email VARCHAR(200) NULL,
  Sexo VARCHAR(1) NULL,
  Status VARCHAR(1) NULL,
  CEP VARCHAR(10) NULL,
  Rua VARCHAR(250) NULL,
  Numero VARCHAR(100) NULL,
  Bairro VARCHAR(200) NULL,
  Cidade VARCHAR(200) NULL,
  Estado VARCHAR(200) NULL,
  Obs VARCHAR(250) NULL,
  PRIMARY KEY(idAlunos),
  INDEX Aluno_Graduacao(idGraduacao),
  INDEX Aluno_Modalidade(idModalidades),
  FOREIGN KEY(idGraduacao)
    REFERENCES Graduacao(idGraduacao)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  FOREIGN KEY(idModalidades)
    REFERENCES Modalidades(idModalidades)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

CREATE TABLE Inscritos (
  idAulas INTEGER NOT NULL,
  idAlunos INTEGER NOT NULL,
  Obs VARCHAR(250) NULL,
  PRIMARY KEY(idAulas, idAlunos),
  INDEX Inscrito_Aula(idAulas),
  INDEX Inscrito_Aluno(idAlunos),
  FOREIGN KEY(idAulas)
    REFERENCES Aulas(idAulas)
      ON DELETE CASCADE
      ON UPDATE NO ACTION,
  FOREIGN KEY(idAlunos)
    REFERENCES Alunos(idAlunos)
      ON DELETE CASCADE
      ON UPDATE NO ACTION
);

CREATE TABLE Presencas (
  idAulas INTEGER NOT NULL,
  idAlunos INTEGER NOT NULL,
  Data DATE NULL,
  PRIMARY KEY(idAulas, idAlunos),
  INDEX Presenca_Aula(idAulas),
  INDEX Presenca_Aluno(idAlunos),
  FOREIGN KEY(idAulas)
    REFERENCES Aulas(idAulas)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  FOREIGN KEY(idAlunos)
    REFERENCES Alunos(idAlunos)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

CREATE TABLE Mensalidade (
  idAlunos INTEGER NOT NULL,
  Valor NUMERIC(17,2) NULL,
  DiaVencimento INTEGER NULL,
  PRIMARY KEY(idAlunos),
  INDEX Mensalidade_Aluno(idAlunos),
  FOREIGN KEY(idAlunos)
    REFERENCES Alunos(idAlunos)
      ON DELETE CASCADE
      ON UPDATE NO ACTION
);

CREATE TABLE Recebimentos (
  idRecebimentos INTEGER NOT NULL AUTO_INCREMENT,
  idAlunos INTEGER NOT NULL,
  idHistoricos INTEGER NOT NULL,
  Data DATE NULL,
  Valor NUMERIC(17,2) NULL,
  Obs VARCHAR(250) NULL,
  PRIMARY KEY(idRecebimentos),
  INDEX Recebimento_Historico(idHistoricos),
  INDEX Recebimento_Aluno(idAlunos),
  FOREIGN KEY(idHistoricos)
    REFERENCES Historicos(idHistoricos)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  FOREIGN KEY(idAlunos)
    REFERENCES Alunos(idAlunos)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

CREATE TABLE MesesReferentes (
  idMesesReferentes INTEGER NOT NULL AUTO_INCREMENT,
  idRecebimentos INTEGER NOT NULL,
  Data DATE NULL,
  PRIMARY KEY(idMesesReferentes, idRecebimentos),
  INDEX MeseReferente_Recebimento(idRecebimentos),
  FOREIGN KEY(idRecebimentos)
    REFERENCES Recebimentos(idRecebimentos)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);



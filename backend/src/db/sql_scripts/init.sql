-- cannot use transactions to guarantee atomicity of entire sql commands as one operation
-- this is a limitation of mysql
-- see https://dev.mysql.com/doc/refman/8.4/en/implicit-commit.html
CREATE TABLE person (
	id VARCHAR(24) NOT NULL,
	given_name VARCHAR(50) NOT NULL,
	surname VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL UNIQUE,
	email_verified BOOLEAN NOT NULL DEFAULT FALSE,
	phone VARCHAR(50) UNIQUE,
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

CREATE TABLE trainer (
  person_id VARCHAR(24) NOT NULL,
  expertise VARCHAR(50) NOT NULL,
  city VARCHAR(50) NOT NULL,
  FOREIGN KEY (person_id) REFERENCES person(id) ON DELETE CASCADE,
  PRIMARY KEY (person_id)
);

CREATE TABLE workout (
  id INT AUTO_INCREMENT,
  client_id VARCHAR(24) NOT NULL,
  trainer_id VARCHAR(24) NOT NULL,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  start_time DATETIME NOT NULL,
  end_time DATETIME NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (client_id) REFERENCES person(id),
  FOREIGN KEY (trainer_id) REFERENCES trainer(person_id),
  PRIMARY KEY (id)
);

CREATE TABLE discipline (
	id SMALLINT AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE trainer_discipline (
	trainer_id VARCHAR(24) NOT NULL,
	discipline_id SMALLINT NOT NULL,
	FOREIGN KEY (trainer_id) REFERENCES trainer(person_id),
	FOREIGN KEY (discipline_id) REFERENCES discipline(id),
	PRIMARY KEY (trainer_id, discipline_id)
);

CREATE TABLE lang (
  id SMALLINT AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE trainer_lang (
  trainer_id VARCHAR(24) NOT NULL,
  lang_id SMALLINT NOT NULL,
  FOREIGN KEY (trainer_id) REFERENCES trainer(person_id),
  FOREIGN KEY (lang_id) REFERENCES lang(id),
  PRIMARY KEY (trainer_id, lang_id)
);

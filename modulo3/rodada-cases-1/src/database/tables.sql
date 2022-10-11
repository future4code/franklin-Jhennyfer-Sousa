CREATE TABLE IF NOT EXISTS athlete (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL
);

CREATE TABLE IF NOT EXISTS competition (
    id VARCHAR(100) PRIMARY KEY,
    modality VARCHAR(100) NOT NULL,
    status ENUM('In progress', 'Closed', 'Open') DEFAULT 'Open'
)

CREATE TABLE IF NOT EXISTS result (
    athlete_id VARCHAR(100),
    competition_id VARCHAR(100),
    value FLOAT NOT NULL,
    unity VARCHAR(5),
    FOREIGN KEY (athlete_id) REFERENCES athlete(id),
    FOREIGN KEY (competition_id) REFERENCES competition(id)
);

SELECT athlete.name, result.value FROM athlete LEFT JOIN result ON
athlete.id = result.athlete_id WHERE result.competition_id = '01'
ORDER BY result.value DESC


DETALHES 2.
SELECT athlete.name AS Athlete, result.value AS Ranking FROM athlete LEFT JOIN result ON
athlete.id = result.athlete_id WHERE result.competition_id = '01'
ORDER BY result.value DESC
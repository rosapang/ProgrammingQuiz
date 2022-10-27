The ddl.sql is created by Gan Li using MySQL Workbench.

There is no need to run this file.

The database has already been set up on AWS RDS.

Please use

`
my_db = mysql.connector.connect(
    host="quiz.c8sslkipdbis.us-west-2.rds.amazonaws.com",
    user="admin",
    password="database1",
    database="quiz"
)
`

to access the database.
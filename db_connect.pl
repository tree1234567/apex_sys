use DBI;

$people = DBI->connect( "dbi:SQLite:people.dbl" ) || die "DB did not connect because: $DBI::errstr";

$people->do( "CREATE TABLE customers ( first_name, last_name, home)" );
$people->do( "INSERT INTO customers VALUES ('Rose', 'Tyler', 'Earth') " );
$people->do( "INSERT INTO customers VALUES ('Zoe', 'Heriot', 'Space Station W3') " );
$people->do( "INSERT INTO customers VALUES ('Jo', 'Grant', 'Earth') " );
$people->do( "INSERT INTO customers VALUES ('Leela', 'N/A', 'Unspecified') " );
$people->do( "INSERT INTO customers VALUES ('Romana', 'N/A', 'Gallifrey') " );
$people->do( "INSERT INTO customers VALUES ('Clara', 'Oswald', 'Earth') " );
$people->do( "INSERT INTO customers VALUES ('Adric', 'N/A', 'Alzarius') " );
$people->do( "INSERT INTO customers VALUES ('Susan', 'Foreman', 'Gallifrey') " );

$res = $people->selectall_arrayref( q( SELECT first_name, last_name, home FROM customers;));


$dbh->disconnect;
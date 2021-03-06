#!/bin/bash
set -e

# Create API user/password/table
# psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
#     CREATE USER $DB_USER WITH PASSWORD '${DB_PASSWORD}';
#     CREATE DATABASE ${DB_NAME};
#     GRANT ALL PRIVILEGES ON DATABASE ${DB_NAME} TO ${DB_USER};
# EOSQL



# Create Metabase user/password/table
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE USER ${MB_DB_USER} WITH PASSWORD '${MB_DB_PASS}';
    CREATE DATABASE ${MB_DB_DBNAME};
    GRANT ALL PRIVILEGES ON DATABASE ${MB_DB_DBNAME} TO ${MB_DB_USER};
EOSQL



using { sbtexp as database } from '../db/schema';

service AdminService  {
    entity Users as projection on database.Users;
}
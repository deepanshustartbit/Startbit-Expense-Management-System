using { sbtexp as database } from '../db/schema';

service AdminService  {
    entity Users as projection on database.Users;
    entity Catagories as projection on database.Catagories;
    entity vehicle as projection on database.vehicle;
}
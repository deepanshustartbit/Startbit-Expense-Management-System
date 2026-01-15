using { sbtexp as database } from '../db/schema';

service CatagoriesService  {
    entity Catagories as projection on database.Catagories;
}
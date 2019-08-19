import {TrainingManagement} from './interf';
export class Trainer implements TrainingManagement{
   private _trainers :any = [];
    insert(trainerobj:any):string{
        this._trainers.push(trainerobj);
        return "";
    }
    
    display():string{
        console.log(this._trainers);
        return"";
    }
    delete(index:number):string{
        this._trainers.splice(index, 1);
        return"";
    }
    update():string{

        return"";
    }
}
var obj = new Trainer();
var emp1 = { name: "poojitha", experience: 11, salary: 2000 };
var emp2 = { name: "snehitha", experience: 12, salary: 2000 };
var emp3 = { name: "riya", experience: 13, salary: 2000 };
obj.insert(emp1);
obj.insert(emp2);
obj.insert(emp3);
obj.display();
obj.delete(1);
obj.display();




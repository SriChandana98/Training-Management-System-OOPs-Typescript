import {TrainingManagement} from './interf';
export class Trainee implements TrainingManagement{
    private _trainee :any = [];
    insert(trainee:any):string{
        this._trainee.push(trainee);
        return "";
    }
    
    display():string{
        console.log(this._trainee);
        return"";
    }
    delete(index:number):string{
        this._trainee.splice(index, 1);
        return"";
    }
    update():string{

        return"";
    }
}
var obj = new Trainee();
var emp1 = { name: "poojitha", experience: 11, salary: 2000 };
var emp2 = { name: "snehitha", experience: 12, salary: 2000 };
var emp3 = { name: "riya", experience: 13, salary: 2000 };
obj.insert(emp1);
obj.insert(emp2);
obj.insert(emp3);
obj.display();
obj.delete(1);
obj.display();

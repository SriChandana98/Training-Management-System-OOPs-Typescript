import {TrainingManagement} from './interf';
import {Trainer} from './Trainer';
import{Trainee} from './Trainee';
 export class callpage{
     obj:Trainer  = new Trainer();
     emp1:any = { name: "poojitha", experience: 11, salary: 2000 };
     emp2:any = { name: "snehitha", experience: 12, salary: 2000 };
     emp3:any = { name: "riya", experience: 13, salary: 2000 };
    obj.insert(emp1);
    obj.insert(emp2);
    obj.insert(emp3);
 }

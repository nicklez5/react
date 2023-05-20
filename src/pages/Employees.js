import '../index.css';
import Employee from '../components/Employee';
import EditEmployee from '../components/EditEmployee';
import AddEmployee from '../components/AddEmployee';
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from '../components/Header';
function Employees() {
  const[role,setRole] = useState('dev')
  const[employees, setEmployees] = useState(
    [
      {id: 1, name: "Caleb", role: "Developer" , img: "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=600"},
      {id: 2, name: "John", role: "Manager" , img: "https://images.pexels.com/photos/4156467/pexels-photo-4156467.jpeg?auto=compress&cs=tinysrgb&w=600"},
      {id: 3, name: "Wick", role: "Director of Eng." , img: "https://images.pexels.com/photos/2553653/pexels-photo-2553653.jpeg?auto=compress&cs=tinysrgb&w=600"},
      {id: 4, name: "Ricky", role: "Software Engineer" , img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
      {id: 5, name: "Johnny", role: "The Devops Guy" , img: "https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg?auto=compress&cs=tinysrgb&w=600"},
      {id: 6, name: "Alex", role: "Senior" , img: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=600"},
    ]
  )
  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee) => {
      if(id == employee.id){
        return {...employee, name: newName, role: newRole}
      }
      return employee
    })
    setEmployees(updatedEmployees)
  }

  function newEmployee(name,role,img){
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    }
    setEmployees([...employees, newEmployee])
  }
  const showEmployees = true;
  return (
    <div className="">
      
     { showEmployees ? (
      <>
        <div className="flex flex-wrap justify-center ">
          {employees.map((employee) => {
            const editEmployee = (
              <EditEmployee
                name={employee.name} 
                role={employee.role} 
                updateEmployee={updateEmployee} 
                id={employee.id}
              />
            );
            return (
            <Employee
              key={employee.id}
              id={employee.id}
              name={employee.name}
              role={employee.role}
              img={employee.img}
              editEmployee={editEmployee}
            />
            );
          })}
        </div>
        <AddEmployee newEmployee={newEmployee}/>
      </>
      ) : (
      <p>You cannot see the employees</p>
      )}
        
    </div>
  );
}

export default Employees;

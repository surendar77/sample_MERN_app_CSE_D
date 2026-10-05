from fastapi import FastAPI
from pydantic import BaseModel
class Student(BaseModel):
    stuname:str
    studept:str
    stuusername:str
    stupassword:str
    stuage:int
    stumark:float

app=FastAPI()
#localhost:8000/getStudents
@app.get("/getStudents")
def getStudents():
    return "Get students method called"

#localhost:8000/addStudent
@app.post("/addStudent")
def addStudent(stu:Student):
    return {"student_details":stu}



#try two more routes
#  /updateStudent => put & /deletestudent => delete
@app.put("/putStudent")
def putStudent():
    return "put student method called"
@app.delete("/deleteStudent")
def deleteStudent():
    return "delete student method called"

@app.get("/getParticularStudent/{id}")
def getParticularStudent(id:int):
    return {"userid":id}

#localhost:8000/filterdept?dept="CSE" & mark=65
@app.get("/filterdept")
def filterdept(dept:str,mark:int):
    return {"dept":dept,"mark":mark}


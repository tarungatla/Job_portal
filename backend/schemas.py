from pydantic import BaseModel

class Job(BaseModel):
   company_name:str
   job_tittle:str
   location:str
   job_description:str

class Application(BaseModel):
   name:str
   email:str
   skills:str
   qualification:str
   status:int
   c_id:int
  
    

    

    
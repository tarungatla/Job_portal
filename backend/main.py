from itertools import tee
import re
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware

import schemas
import models
from database import Base, engine, SessionLocal
from sqlalchemy.orm import Session 

Base.metadata.create_all(engine)


def db_session():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

app = FastAPI()


origins = {
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:3001",
}

app.add_middleware(
   CORSMiddleware,
    allow_origins = origins,
    allow_credentials =True,
    allow_methods = ["*"],
    allow_headers= ["*"],
)

@app.get("/jobs")
def getJobs(db:Session=Depends(db_session)):
    openings = db.query(models.Job).all()
    return openings

@app.get("/appliedjobs")
def appliedJobs(db:Session=Depends(db_session)):
    applications = db.query(models.Application).all()
    temp = []
    for app in applications:
        item = db.query(models.Job).get(app.c_id)
        temp1 = {"a_id":app.a_id,
            "company_name": item.company_name,
           "job_tittle":item.job_tittle,
            "name": app.name,
            "email": app.email,
            "skills": app.skills,
            "qualification": app.qualification ,
            "status":app.status}
        temp.append(temp1)
           
    return temp
        

@app.post("/add/job")
def createJob(job:schemas.Job, db:Session=Depends(db_session)):
    job = models.Job(company_name = job.company_name, job_tittle= job.job_tittle, location=job.location,job_description=job.job_description )
    db.add(job)
    db.commit()
    db.refresh(job)
    return job

@app.delete("/delete/job/{c_id}")
def deleteItem(c_id:int, db:Session= Depends(db_session)):
    jobObject = db.query(models.Job).get(c_id)
    db.delete(jobObject)
    db.commit()
    db.close()
    return {" deleted...{c_id} succesfully"}

@app.get("/find/{c_id}")#path parameter 
def getItem(c_id:int, db: Session=Depends(db_session)):
   item = db.query(models.Job).get(c_id)
   return item

@app.get("/applications")
def getApplications(db:Session=Depends(db_session)):
    application = db.query(models.Application).all()
    return application

@app.get("/applications/find/{c_id}")#path parameter 
def getItem(c_id:int, db: Session=Depends(db_session)):
    items = db.query(models.Application).all()
    temp = []
    for item in items:
        if item.c_id is c_id:
          temp.append(item)
    return temp
     

@app.post("/Add/application")
def createApplication(application:schemas.Application, db:Session=Depends(db_session)):
    application = models.Application(name = application.name, email= application.email, skills=application.skills,qualification=application.qualification,status=application.status, c_id=application.c_id)
    db.add(application)
    db.commit()
    db.refresh(application)
    return application

@app.put("/put1/application/{a_id}")
def updateApplication(a_id:int, db:Session=Depends(db_session)):
    item = db.query(models.Application).get(a_id)
    item.status = 1
    db.commit()
    return item

@app.put("/put2/application/{a_id}")
def updateApplication(a_id:int, db:Session=Depends(db_session)):
    item = db.query(models.Application).get(a_id)
    item.status = 2
    db.commit()
    return item

    
@app.delete("/application/{a_id}")
def deleteApplication(a_id:int, db:Session= Depends(db_session)):
    application = db.query(models.Application).get(a_id)
    db.delete(application)
    db.commit()
    db.close()
    return {' deleted...{a_id} succesfully'}
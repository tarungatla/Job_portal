from sqlalchemy import Column, Integer, String
from database import Base 

class Job(Base):
    __tablename__ = 'jobs'
    c_id = Column(Integer, primary_key=True)
    company_name = Column(String(256))
    job_tittle = Column(String(256))
    location = Column(String(256))
    job_description=Column(String(256))
    
class Application(Base):
    __tablename__='applications'
    a_id = Column(Integer,primary_key=True)
    name = Column(String(256))
    email= Column(String(256))
    qualification = Column(String(256))
    skills= Column(String(256))  
    status= Column(Integer)
    c_id = Column(Integer)


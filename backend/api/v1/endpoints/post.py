from fastapi import APIRouter
import schemas.post as schemas
from typing import List
import models.post as models

router = APIRouter()

@router.get("/", response_model=List[schemas.Post])
def index():
  return list(models.Post.select())

@router.get("/{id}")
def show():
  return {"Hello": "World"}

@router.post("/")
def create():
  return {"Hello": "World"}

@router.put("/{id}")
def update():
  return {"Hello": "World"}

@router.delete("/{id}")
def delete():
  return {"Hello": "World"}
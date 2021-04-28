from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def index():
  return {"Hello": "tags"}

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
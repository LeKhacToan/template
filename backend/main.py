from typing import Optional
from fastapi import FastAPI
from config.database import db
from api.v1.api import router
from fastapi.middleware.cors import CORSMiddleware

from config.setting import POSTGRES_HOST, WEB_URL

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[WEB_URL],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event('startup')
async def startup():
  if db.is_closed():
    db.connect()

@app.on_event('shutdown')
async def shutdown():
  print("Closing...")
  if not db.is_closed():
    db.close()


@app.get("/")
def read_root():
  return {"Hello": "World12"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
  return {"item_id": item_id, "q": q}

app.include_router(router, prefix="/api/v1")
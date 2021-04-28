from pydantic import BaseModel
from typing import List
from config.database import PeeweeGetterDict

class TagBase(BaseModel):
  name: str

class TagCreate(TagBase):
  pass

class Tag(TagBase):
  id: int
  post_id: int

  class Config:
    orm_mode = True
    getter_dict = PeeweeGetterDict
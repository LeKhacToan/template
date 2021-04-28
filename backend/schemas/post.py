from pydantic import BaseModel
from typing import List

from .tag import Tag
from config.database import PeeweeGetterDict

class PostBase(BaseModel):
  title: str
  description: str
  active: bool

class PostCreate(PostBase):
  pass

class Post(PostBase):
  id: int
  tags: List[Tag] = []
  class Config:
    orm_mode = True
    getter_dict = PeeweeGetterDict
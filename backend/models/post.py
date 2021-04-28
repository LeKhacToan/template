from peewee import CharField, BooleanField, ForeignKeyField

from .base import BaseModel

class Post(BaseModel):
  title = CharField()
  description = CharField()
  active = BooleanField(default=True)

class Tag(BaseModel):
  name = CharField()
  post = ForeignKeyField(Post, backref="tags")
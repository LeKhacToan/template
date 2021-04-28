from peewee import CharField, ForeignKeyField

from base import BaseModel
from .post import Post

# class Tag(BaseModel):
#   name = CharField()
#   post = ForeignKeyField(Post, backref="tags")

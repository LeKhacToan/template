"""add tag table

Revision ID: 72e183fe9fb8
Revises: 3503bd017405
Create Date: 2021-04-28 10:50:16.309931

"""
from alembic import op
from sqlalchemy import Column, Integer, String, Text, PrimaryKeyConstraint


# revision identifiers, used by Alembic.
revision = '72e183fe9fb8'
down_revision = '3503bd017405'
branch_labels = None
depends_on = None


def upgrade():
  op.create_table('tag',
    Column('id', Integer, nullable=False),
    Column('name', String(length=255), nullable=False),
    Column('post_id', Integer, nullable=False),
    PrimaryKeyConstraint('id')
  )

def downgrade():
  op.drop_table('tag')

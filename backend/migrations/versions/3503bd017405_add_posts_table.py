"""add posts table

Revision ID: 3503bd017405
Revises: 
Create Date: 2021-04-28 10:21:00.009854

"""
from alembic import op
from sqlalchemy import Column, Integer, String, Text, PrimaryKeyConstraint


# revision identifiers, used by Alembic.
revision = '3503bd017405'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
  op.create_table('post',
    Column('id', Integer, nullable=False),
    Column('title', String(length=255), nullable=False),
    Column('description', String(), nullable=False),
    PrimaryKeyConstraint('id')
  )


def downgrade():
  op.drop_table('post')

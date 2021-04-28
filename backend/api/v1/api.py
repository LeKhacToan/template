from fastapi import APIRouter

from api.v1.endpoints import post, tag

router = APIRouter()

router.include_router(post.router, prefix="/posts", tags=["posts"])
router.include_router(tag.router, prefix="/tags", tags=["tags"])
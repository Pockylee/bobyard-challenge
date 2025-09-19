import json
from django.core.management.base import BaseCommand
from comments.models import Comment
from dateutil import parser

class Command(BaseCommand):
    help = "Seed comments from json file"

    def handle(self, *args, **options):
        with open("comments.json") as f:
            data = json.load(f)
            # print(data)
        
        items = data.get("comments", [])
        created = 0
        # iterte the comments and create a Comment object for each.
        for item in items:
            Comment.objects.update_or_create(
                id = int(item["id"]),
                defaults = {
                    "author": item["author"],
                    "text": item["text"],
                    "date": parser.isoparse(item["date"]),
                    "likes": item.get("likes", 0),
                    "image": item.get("image", "")},
            )
            created += 1
        self.stdout.write(self.style.SUCCESS(f"Successfully created {created} comments"))
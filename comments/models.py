from django.db import models

# Commens model
class Comment(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    author = models.CharField(max_length = 50)
    text = models.TextField()
    date = models.DateTimeField()
    likes = models.IntegerField(default = 0)
    image = models.URLField(blank = True)

    # String representation of the django admin to keep clean.
    def __str__(self):
        return f"{self.author}: {self.text[:40]}..."
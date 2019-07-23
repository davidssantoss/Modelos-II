from django.db import models

class Player(models.Model):
    username = models.CharField(max_length = 20, primary_key = True)
    name = models.CharField(max_length = 30)
    last_name = models.CharField(max_length = 30)
    def __str__(self):
        return self.username

class Game(models.Model):
    name = models.CharField(max_length = 20, primary_key = True)
    gender = models.CharField(max_length = 20)
    def __str__(self):
        return self.name

class Score(models.Model):
    username = models.ForeignKey(Player, on_delete = models.CASCADE)
    game = models.ForeignKey(Game, on_delete = models.CASCADE)
    score = models.IntegerField
    def __str__(self):
        return self.username + " " + self.game + " " + str(self.score)


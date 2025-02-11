from django.db import models

# Create your models here.

class Booking(models.Model):
    where = models.CharField(max_length=200)
    arrivals = models.CharField(max_length=200)  # Optional, change based on actual data type
    date = models.DateField()
    details = models.TextField()  # For name, phone, email, etc.

    def __str__(self):
        return f"Booking at {self.where} on {self.date}"

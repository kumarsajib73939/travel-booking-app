from django import forms
from .models import Booking

class BookingForm(forms.ModelForm):
    class Meta:
        model = Booking
        fields = ['where', 'arrivals', 'date', 'details']
        widgets = {
            'where': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Where To'}),
            'arrivals': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'How Many'}),
            'date': forms.DateInput(attrs={'class': 'form-control', 'type': 'date'}),
            'details': forms.Textarea(attrs={'class': 'form-control', 'rows': 5, 'placeholder': 'Enter Your Name & Details'}),
        }
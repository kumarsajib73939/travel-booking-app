from django.shortcuts import redirect, render
from django.http import HttpResponse

from travel.forms import BookingForm

def home(request):
    return HttpResponse('Hello')


def home_page(request):
    return render(request, 'index.html')


def book_view(request):
    if request.method == 'POST':
        form = BookingForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('success_page')  # Replace 'success_page' with your success URL name
    else:
        form = BookingForm()

    return render(request, 'booking_page.html', {'form': form})


def success_view(request):
    return render(request, 'success_page.html')

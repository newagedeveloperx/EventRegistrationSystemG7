from django.contrib import admin


# Register your models here.

class BookingAdmin(admin.ModelAdmin):
    list_display=('events', 'session', 'user')
    search_fields = ('title', 'user')

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()


class EventsAdmin(admin.ModelAdmin):
    list_display = ('title', 'event_description', 'speaker', 'session', 'room_capacity')
    search_fields = ('title', 'event_description', 'speaker', 'session')

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()
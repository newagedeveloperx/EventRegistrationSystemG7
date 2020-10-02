from django.contrib import admin
from accounts.models import Account
# Register your models here.


class AccountAdmin(admin.ModelAdmin):
    list_display = ('Firstname', 'Lastname', 'email',
                    'Username', 'Phone', 'City', 'is_admin', 'is_staff', 'is_active')
    search_fields = ('email', 'Username', 'Lastname',)
    readonly_fields = ('date_joined', 'last_login')

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()


admin.site.register(Account, AccountAdmin)

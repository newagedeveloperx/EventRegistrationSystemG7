from django.db import models
from django.db import models
from django.db.models.fields import DateField
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from rest_framework_simplejwt.tokens import RefreshToken
from django.utils.translation import ugettext_lazy as _


# Create your models here.
class CustomUserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifiers
    for authentication instead of usernames.
    """

    def create_user(self, Firstname, Lastname, Username, email, password, Phone, City, **extra_fields):
        """
        Creating a User with a email and password.
        """
        if not Firstname:
            raise ValueError(_('Firstname field cannot be left empty'))
        if not Lastname:
            raise ValueError(_('Lastname field cannot be left empty'))
        if not email:
            raise ValueError(_('Email is required'))
        if not Username:
            raise ValueError(_('Username is required'))
        if not Phone:
            raise ValueError(_('A user is required to have a phone number'))
        #if not Date_Of_Birth:
        #    raise ValueError(_('A user is required to have a date of birth'))
        if not City:
            raise ValueError(_('Kindly enter a city'))

        
        user = self.model(
            Firstname=Firstname,
            Lastname=Lastname,
            email=self.normalize_email(email),
            password=password,
            Username=Username,
            Phone=Phone,
            #Date_Of_Birth=Date_Of_Birth,
            City=City
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, Firstname, Lastname, Username, email, password, Phone, City, **extra_fields):
        user = self.create_user(
            Firstname=Firstname,
            Lastname=Lastname,
            email=self.normalize_email(email),
            password=password,
            Username=Username,
            Phone=Phone,
            #Date_Of_Birth=Date_Of_Birth,
            City=City
        )

        """
      Create and save a SuperUser with the given email and password.
      """
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save()
        return user


class Account(AbstractBaseUser, PermissionsMixin):

    # User account attributes.
    Firstname = models.CharField(
        verbose_name='Firstname', max_length=50, blank=False)
    Lastname = models.CharField(
        verbose_name='Lastname', max_length=100, blank=False)
    email = models.EmailField(
        verbose_name='Email', max_length=255, unique=True
    )
    Username = models.CharField(
        verbose_name='Username', max_length=255, unique=True)

    Phone = models.CharField(
        verbose_name='Phone', max_length=10, blank=False)

    City = models.TextField(
        verbose_name='City', max_length=200, blank=False)
    
    #Date_Of_Birth = models.DateField(
    #    verbose_name='Date_Of_Birth', auto_now=True, blank=True, null=True)

  
    

    # Setting user status active.
    is_active = models.BooleanField(default=True)

    # Setting user permissions
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(
        verbose_name='date joined', auto_now_add=True)
    is_admin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'Username'
    REQUIRED_FIELDS = ['Firstname', 'Lastname',
                        'email', 'Phone', 'City']

    #def get_full_name(self):
    #    """
    #    Returning the the full name
    #    """
    #    Fullname = '%s %s' % (self.Firstname, self.Lastname)
    #    return Fullname.strip()

    #def __str__(self):
    #    return ('{} <{}>'.format(self.get_Fullname), self.Fullname)

    def has_perm(self, perm, obj=None):
        "User has special persmissions"
        return self.is_admin

    def has_module_perms(self, app_label):
        "User has permissions to view app"
        return True

    def tokens(self):
        refresh = RefreshToken.for_user(self)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token)

        }

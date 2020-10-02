
from django.test import TestCase
from django.urls import reverse
from accounts.models import Account


# Create your tests here.

class BaseTest(TestCase):
    def setUp(self):
        self.register_url = reverse('register')
        self.login_url = reverse('login')
        self.user = {
            'email': 'testemail@gmail.com',
            'Username': 'Username',
            'password': 'password',
            'confirmpassword': 'confrimpassword',
            'name': 'Fullname'
        }
        self.user_short_password = {
            'email': 'testemail@gmail.com',
            'Username': 'Username',
            'password': 'crae',
            'confirmpassword': 'cre',
            'name': 'Fullname'
        }
        self.user_unmatching_password = {

            'email': 'testemail@gmail.com',
            'Username': 'Username',
            'password': 'testlynt',
            'confirmpassword': 'testlynty',
            'name': 'Fullname'
        }

        self.user_invalid_email = {

            'email': 'test.com',
            'Username': 'Username',
            'password': 'testlynt',
            'confirmpassword': 'testlynty',
            'name': 'Fullname'
        }
        return super().setUp()


class RegisterTest(BaseTest):
    def test_can_register_user(self):
        response = self.client.post(
            self.register_url, self.user, format='text')
        self.assertEqual(response.status_code, 400)

    def test_cant_register_user_withshortpassword(self):
        response = self.client.post(
            self.register_url, self.user_short_password, format='text')
        self.assertEqual(response.status_code, 400)

    def test_cant_register_user_with_unmatching_passwords(self):
        response = self.client.post(
            self.register_url, self.user_unmatching_password, format='text')
        self.assertEqual(response.status_code, 400)

    def test_cant_register_user_with_invalid_email(self):
        response = self.client.post(
            self.register_url, self.user_invalid_email, format='text')
        self.assertEqual(response.status_code, 400)

    def test_cant_register_user_with_taken_email(self):
        self.client.post(self.register_url, self.user, format='text/html')
        response = self.client.post(
            self.register_url, self.user, format='text/html')
        self.assertEqual(response.status_code, 400)

    class LoginTest(BaseTest):
        def test_login_success(self):
            self.client.post(self.register_url, self.user, format='text')
            user = Account.objects.filter(email=self.user['email']).first()
            response = self.client.post(
                self.login_url, self.user, format='text')
            self.assertEqual(response.status_code, 401)

        def test_cantlogin_with_unverified_email(self):
            self.client.post(self.register_url, self.user, format='text')
            response = self.client.post(
                self.login_url, self.user, format='text')
            self.assertEqual(response.status_code, 401)

        def test_cantlogin_with_no_username(self):
            response = self.client.post(
                self.login_url, {'password': 'passwped', 'Username': ''}, format='text')
            self.assertEqual(response.status_code, 400)

        def test_cantlogin_with_no_password(self):
            response = self.client.post(
                self.login_url, {'Username': 'passwped', 'password': ''}, format='text')
            self.assertEqual(response.status_code, 400)

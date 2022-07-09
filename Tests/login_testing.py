from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time
import random

options=[1,2,3,4]
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
usernames=["user1","user2","user3"]
passwords=["pass1","pass2","pass3"]
driver.get("http://localhost:3000/login")
time.sleep(2)
n=len(usernames)
for i in range (0,n):
    for j in range(0,n):
        driver.find_element("id","username").send_keys(usernames[i])
        time.sleep(1)
        driver.find_element("id","password").send_keys(passwords[j])
        time.sleep(1) 
        driver.find_element("id","submit_button").click()
        time.sleep(1) 
        driver.switch_to.alert.accept(); 
        driver.find_element("id","username").clear()
        driver.find_element("id","password").clear()




driver.find_element("id","submit_button").click()
time.sleep(5)
driver.switch_to.alert.accept();


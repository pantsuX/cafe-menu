import pygame

pygame.init()
screen = pygame.display.set_mode((600,400))

while True:

    for event in pygame.event.get():
        if event.type == pygame.quit:
            pygame.quit()
    
    pygame.display.update()
import * as React from "react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { buttonVariants } from "@/components/ui/button"
import { LogIn } from "lucide-react"
import { useTranslations } from "@/i18n/utils"
import type { Language } from "@/i18n/ui"

interface Component { title: string; href: string; description: string }

interface Props {
  lang: Language
}

export default function ({ lang }: Props) {
  const t = useTranslations(lang);

  const documents = t('nav.documentsTab') as Component[]
  const organs = t('nav.governmentTab') as Component[]

  return (
    <NavigationMenu className="w-full py-3 backdrop-blur-xl backdrop-saturate-[1.2] bg-background/50">
      <div className="w-full max-w-screen-xl px-8 flex justify-between">
        <NavigationMenuList>
          <NavigationMenuItem>
            <a href="/">
              <NavigationMenuLink>
                <img src="/waydines.svg" alt="Sun" className="w-10 min-w-10 mr-2 p-1 hover:bg-accent ease-in-out duration-300 rounded-md" />
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>{t('nav.government')}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <span
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none"
                    >
                      <img src="/waydines.svg" alt="Sol" className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        {t("alt.gov")}
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        
                      </p>
                    </span>
                  </NavigationMenuLink>
                </li>
                {organs.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>{t('nav.documents')}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {documents.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="/docs">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {t('nav.contact')}
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList className="gap-2">
          <NavigationMenuItem>
            <a href="/docs">
              <NavigationMenuLink className={cn(buttonVariants({ variant: "outline" }), "bg-transparent")}>
                Log-in
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="/docs">
              <NavigationMenuLink className={buttonVariants()}>
                <LogIn className="mr-2 h-4 w-4"/>
                {t('nav.register')}
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

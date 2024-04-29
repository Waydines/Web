export type Language = 'pt' | 'en'
type I18nDefs = Record<Language, Record<string, any>>

export const defaultLanguage: Language = 'pt'

export const ui: I18nDefs = {
    pt: {
        "alt.sun": "Sol",
        "alt.sec": "CSE",
        "alt.gov": "Governo Nacional",

        "nav.register": "Cadastro",
        "nav.contact": "Contato",
        "nav.documents": "Documentos",
        "nav.government": "Governo",
        "nav.governmentTab": [
            {
                title: "Parlamento",
                href: "",
                description:
                    "Atualize-se de projetos de leis e propostas de emenda.",
            },
            {
                title: "Ministérios",
                href: "",
                description:
                    "Saiba do que os responsáveis do executivo estão fazendo.",
            },
            {
                title: "Outros",
                href: "",
                description:
                    "Portal da Transparência, cortes, democracia, etc.",
            },
        ],
        "nav.documentsTab": [
            {
                title: "Identidade",
                href: "",
                description:
                    "Seu Waydines ID conectado às suas informações importantes.",
            },
            {
                title: "Título de Eleitor",
                href: "",
                description:
                    "Documento obrigatório para todos os cidadãos participarem de eleições.",
            },
            {
                title: "Carteira de Estudante",
                href: "",
                description:
                    "Documento contendo informações sobre sua universidade, notas, etc.",
            },
            {
                title: "Carteira de Trabalho",
                href: "",
                description:
                    "Documento que garante os direitos trabalhistas dos waydineenses.",
            },
            {
                title: "Passaporte",
                href: "",
                description: "Documento essencial para viagens internacionais.",
            },
            {
                title: "Visto de Entrada",
                href: "",
                description:
                    "Autorização concedida a estrangeiros de países sem passaporte oficial.",
            },
        ],
    },
    en: {
        "alt.sun": "Sun",
        "alt.sec": "SEC",
        "alt.gov": "National Government",

        "nav.register": "Sign-up",
        "nav.contact": "Contact",
        "nav.documents": "Documents",
        "nav.government": "Government",
        "nav.governmentTab": [
            {
                title: "Parliament",
                href: "",
                description:
                    "Update yourself about proposals of laws and ammendments.",
            },
            {
                title: "Ministries",
                href: "",
                description:
                    "Find out what those responsible for the executive are doing.",
            },
            {
                title: "Other",
                href: "",
                description: "Transparency Portal, courts, democracy, etc.",
            },
        ],
        "nav.documentsTab": [
            {
                title: "Identification",
                href: "",
                description:
                    "Your Waydines ID connected to your most important info.",
            },
            {
                title: "Voter Registration",
                href: "",
                description:
                    "Mandatory document for all citizens to participate in elections.",
            },
            {
                title: "Student ID",
                href: "",
                description:
                    "Document containing information about your university, grades, etc.",
            },
            {
                title: "Employment Record",
                href: "",
                description:
                    "Document that guarantees the labor rights of Waydines' residents.",
            },
            {
                title: "Passport",
                href: "",
                description: "Essential document for international travel.",
            },
            {
                title: "Entry Visa",
                href: "",
                description:
                    "Authorization granted to people from countries without official passport.",
            },
        ],
    },
} as const
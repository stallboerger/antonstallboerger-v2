import { defineDocumentType, makeSource, defineNestedType} from "contentlayer/source-files";

const Thought = defineDocumentType(() => ({
    name: 'Thought',
    filePathPattern: `thoughts/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        date: {
            type: 'string',
            required: true,
        },
        image: {
            type: 'string'
        },
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, ""),
        },
    }
}))

const Collaborator = defineNestedType(() => ({
    name: 'Collaborator',
    fields: {
        name: {
            type: 'string',
            required: true
        },
        url: {
            type: 'string',
            required: true
        },
        avatar: {
            type: 'string',
            required: true
        }
    }
}))

const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: `projects/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            required: true
        },
        year: {
            type: 'date',
            required: true
        },
        image: {
            type: 'string',
            // required: true
        },
        description: {
            type: 'string',
            required: true
        },
        playground: {
            type: 'boolean',
            required: true,
            default: false
        },
        url: {
            type: 'string',
        },
        collaborators: {
            type: 'list',
            of: Collaborator
        }
    },
    computedFields: {
        slug: {
            type: 'string',
            resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, "")
        }
    }
}))

export default makeSource({
    contentDirPath: './content',
    documentTypes: [Thought, Project]
})
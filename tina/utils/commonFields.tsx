import {
  wrapFieldsWithMeta,
  type Form,
  type TinaCMS,
  type TinaField,
  Select,
  SelectField,
  SelectFieldPlugin,
} from "tinacms";
import { RestartWarning } from "./warning";

const REF_NAME = "RWP";

/**
 * This function takes a text and converts it into a URL-friendly slug.
 * It performs the following transformations:
 * - Normalizes the string to remove accents
 * - Converts the text to lower case
 * - Replaces single quotes and double quotes with spaces
 * - Replaces spaces with hyphens
 * - Removes all non-alphanumeric characters except hyphens
 * - Replaces multiple consecutive hyphens with a single hyphen
 * - Replaces all non-ASCII characters with hyphens
 * - Removes leading and trailing hyphens
 *
 * @param {string} text - The text to be slugified.
 * @returns {string} The slugified text.
 */
const slugify = (text) => {
  return text
    .toString()
    .normalize("NFD")
    .toLowerCase()
    .replace(/['"]/g, " ")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/[^\x00-\x7F]/g, "-")
    .replace(/-+$/, "");
};

/**
 * This function is called before the form is submitted.
 * @param {Form} form - The form object.
 * @param {TinaCMS} cms - The cms object.
 * @param {Record<string, any>} values - The values object.
 * @returns {Record<string, any>} The values object.
 */
const onFichesBeforeSubmit_DefaultFields = async ({
  form,
  values,
}: {
  form: Form;
  cms: TinaCMS;
  values: Record<string, any>;
}) => {
  if (form.crudType === "create") {
    return {
      ...values,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      filename:
        values.language !== "fr"
          ? values.language +
            "/" +
            REF_NAME +
            "_" +
            values.refID +
            "-" +
            slugify(values.title)
          : REF_NAME + "_" + values.refID + "-" + slugify(values.title),
    };
  }
  return {
    ...values,
    updatedAt: new Date().toISOString(),
  };
};

/**
 * This function is called before the form is submitted.
 * @param {Form} form - The form object.
 * @param {TinaCMS} cms - The cms object.
 * @param {Record<string, any>} values - The values object.
 * @returns {Record<string, any>} The values object.
 */
const onLexiqueBeforeSubmit_DefaultFields = async ({
  form,
  values,
}: {
  form: Form;
  cms: TinaCMS;
  values: Record<string, any>;
}) => {
  if (form.crudType === "create") {
    return {
      ...values,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      filename:
        values.language !== "fr"
          ? values.language + "/" + slugify(values.title)
          : slugify(values.title),
    };
  }
  return {
    ...values,
    updatedAt: new Date().toISOString(),
  };
};

/**
 * This function is called before the form is submitted.
 * @param {Form} form - The form object.
 * @param {TinaCMS} cms - The cms object.
 * @param {Record<string, any>} values - The values object.
 * @returns {Record<string, any>} The values object.
 */
const onPersonnasBeforeSubmit_DefaultFields = async ({
  form,
  values,
}: {
  form: Form;
  cms: TinaCMS;
  values: Record<string, any>;
}) => {
  if (form.crudType === "create") {
    return {
      ...values,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      filename:
        values.language !== "fr"
          ? values.language + "/" + slugify(values.title)
          : slugify(values.title),
    };
  }
  return {
    ...values,
    updatedAt: new Date().toISOString(),
  };
};

/**
 * This function is called before the form is submitted.
 * @param {Form} form - The form object.
 * @param {TinaCMS} cms - The cms object.
 * @param {Record<string, any>} values - The values object.
 * @returns {Record<string, any>} The values object.
 */
const onPagesBeforeSubmit_DefaultFields = async ({
  form,
  values,
}: {
  form: Form;
  cms: TinaCMS;
  values: Record<string, any>;
}) => {
  if (form.crudType === "create") {
    return {
      ...values,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      filename:
        values.language !== "fr"
          ? values.language + "/" + slugify(values.title)
          : slugify(values.title),
    };
  }
  return {
    ...values,
    updatedAt: new Date().toISOString(),
  };
};

/**
 * Visible Slug field
 * @type {TinaField}
 */
const slugVisibleField: any = {
  type: "string",
  name: `slug`,
  label: "Slug",
  description:
    "Ce champs sera automatiquement généré au premier enregistrement. Il n'est pas recommandé de le modifier. Pour créer une page index, utilisez `.` comme slug.",
};

/**
 * Visible Slug field
 * @type {TinaField}
 */
const slugHiddenField: any = {
  type: "string",
  name: `slug`,
  ui: {
    component: "hidden",
  },
};

/**
 * Title field
 * @type {TinaField}
 */
const titleField: any = (label) => {
  return {
    type: "string",
    name: `_${slugify(label).replace(/-/g, "_")}`,
    ui: {
      component: () => {
        return <h2 className="mb-2 text-xl font-black">{label}</h2>;
      },
    },
  };
};

/**
 * Warning field
 * @type {TinaField}
 */
const warnField: any = (view = "", comment = "") => {
  return {
    type: "string",
    name: "_warning",
    ui: {
      component: () => {
        return <RestartWarning view={view} comment={comment} />;
      },
    },
  };
};

/**
 * Default fields for fiches/lexiques/personnas
 * @type {TinaField[]}
 */
const defaultFields: TinaField[] = [
  {
    type: "string",
    name: "title",
    label: "Title",
    isTitle: true,
    required: true,
  },
  {
    type: "datetime",
    name: "createdAt",
    label: "Creation date",
    ui: {
      component: "hidden",
    },
  },
  {
    type: "datetime",
    name: "updatedAt",
    label: "Updated date",
    ui: {
      component: "hidden",
    },
  },
  {
    type: "string",
    name: "language",
    label: "Language",
    required: true,
    options: ["fr", "en", "es"],
    ui: {
      // component: "select",
      validate: (value) => {
        if (value === "" || value === undefined || value === null) {
          return "Required";
        }
      },
      component: wrapFieldsWithMeta(({ field, input, meta }) => {
        if (meta.initial === undefined) {
          return (
            <>
              <div className="group relative">
                <select
                  {...input}
                  {...field}
                  {...meta}
                  className="focus:shadow-outline block w-full cursor-pointer appearance-none truncate rounded-md border border-gray-200 bg-white py-2 pl-3 pr-8 text-base text-gray-300 shadow focus:border-blue-500 focus:outline-none focus:ring-blue-500 group-has-[option:not([value='']):checked]:text-gray-700 sm:text-sm"
                >
                  <option value="">Choose an option</option>
                  {field["options"].map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="pointer-events-none absolute right-2 top-1/2 h-auto w-6 -translate-y-1/2 text-gray-300 transition duration-150 ease-out group-hover:text-blue-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                </svg>
              </div>
            </>
          );
        } else {
          return <span className="font-bold">{input.value}</span>;
        }
      }),
    },
  },
  {
    type: "boolean",
    name: "published",
    label: "Published",
    required: true,
    description:
      "La page/fiche ne sera pas visible tant qu'elle n'est pas publiée.",
  },
];

export {
  titleField,
  slugVisibleField,
  slugHiddenField,
  warnField,
  defaultFields,
  onFichesBeforeSubmit_DefaultFields,
  onLexiqueBeforeSubmit_DefaultFields,
  onPersonnasBeforeSubmit_DefaultFields,
  onPagesBeforeSubmit_DefaultFields,
};

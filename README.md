# 📘 Lightning Data Service (LDS) - Overview

## 🔷 What is Lightning Data Service (LDS)?

Lightning Data Service (LDS) is a **built-in service in Salesforce** that allows you to **read, create, edit, or delete Salesforce records** directly in Lightning Components **without writing Apex code or using SOQL/DML**.

It provides a standard way to work with record data and is conceptually similar to how `StandardController` worked in Visualforce pages.

---

## 🔧 How It Works

- LDS handles all **data loading and saving** operations behind the scenes.
- It uses a **client-side cache** to enhance performance and minimize server calls.
- When a record is updated, LDS **automatically refreshes** all components on the page that are using the same record.
- This ensures **data consistency** across multiple components referring to the same record.

## 🔑 Key Features

| Feature                   | Description                                                                                               |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| **No Apex Needed**        | Use out-of-the-box components like `lightning-record-form`, or JavaScript wire adapters like `getRecord`. |
| **Client-Side Caching**   | Improves performance and user experience by caching data.                                                 |
| **Automatic UI Refresh**  | If record data changes in one component, all components showing that data are updated.                    |
| **Record-level Security** | Automatically respects field-level security (FLS), sharing rules, CRUD permissions.                       |


## ⚙️ Components and Wire Adapters using LDS

### 1. `lightning-record-form`

- Auto-generates a form to **view**, **edit**, or **create** records.
- Requires minimal setup — no JavaScript logic is needed.
- Ideal for quickly building forms using your object’s layout.

#### ✅ Example: Edit an Account Record

```html
<!-- 
  lightning-record-form is a base component that handles
  record data using Lightning Data Service internally.
-->
<lightning-record-form
    record-id="001XXXXXXXXXXXXXXX"  <!-- ID of the record to edit -->
    object-api-name="Account"       <!-- API name of the Salesforce object -->
    layout-type="Full"              <!-- Use the full layout from the page layout editor -->
    mode="edit">                    <!-- Mode can be 'view', 'edit', or 'readonly' -->
</lightning-record-form>

📝 Tip: You can change mode="edit" to view or readonly to switch behavior.

### 2. `lightning-record-edit-form`

- Use when you want **custom layout control** over form fields.
- Still uses **Lightning Data Service** (LDS) internally.
- Allows full customization of the layout and input fields.

#### ✅ Example: Editable Form for Account

```html
<!-- 
  lightning-record-edit-form allows you to control the form structure 
  and layout manually while still benefiting from LDS.
-->
<lightning-record-edit-form 
    object-api-name="Account"           <!-- Salesforce Object API Name -->
    record-id="001XXXXXXXXXXXXXXX">     <!-- Record ID to be edited -->

    <!-- lightning-messages shows validation or error messages -->
    <lightning-messages></lightning-messages>

    <!-- Add individual input fields manually -->
    <lightning-input-field field-name="Name"></lightning-input-field>
    <lightning-input-field field-name="Phone"></lightning-input-field>
    <lightning-input-field field-name="Industry"></lightning-input-field>

    <!-- Submit button to save changes -->
    <lightning-button type="submit" label="Save"></lightning-button>
</lightning-record-edit-form>

## ⚙️ 3. `lightning-record-view-form`

The `lightning-record-view-form` component is used to **display Salesforce record data in a read-only format**.

It behaves similarly to `lightning-record-edit-form`, but instead of allowing users to input or edit data, it only shows the field values. This is useful when you want to present data in a **custom layout** without enabling editing.

It leverages **Lightning Data Service (LDS)** behind the scenes, so it benefits from **caching, security enforcement, and automatic UI refresh** when the record is updated elsewhere.

---

### ✅ Example: Read-Only View of an Account Record

```html
<!-- 
  lightning-record-view-form displays read-only fields.
  Useful for custom layouts that do not require editing.
-->
<lightning-record-view-form 
    object-api-name="Account"           <!-- API name of the Salesforce object -->
    record-id="001XXXXXXXXXXXXXXX">     <!-- ID of the record to be displayed -->

    <!-- Read-only fields: lightning-output-field automatically formats values -->
    <lightning-output-field field-name="Name"></lightning-output-field>
    <lightning-output-field field-name="Phone"></lightning-output-field>
    <lightning-output-field field-name="Industry"></lightning-output-field>
</lightning-record-view-form>

📝 Tip: Use lightning-output-field inside lightning-record-view-form for clean, auto-styled display.

### 🔒 Benefits

- ✅ **Automatically respects Field-Level Security (FLS)** and **sharing rules**
- ✅ **No Apex or JavaScript needed** — simplifies development for admins and developers
- ✅ **Clean and simple UI** for displaying Salesforce record data
- ✅ **Uses LDS caching and auto-refresh features** for improved performance and real-time updates

# Налаштування ACF полів для email адрес сповіщень (Стандартна версія ACF)

## Варіант 1: Використання полів на головній сторінці

### Крок 1: Створіть групу полів в ACF

1. Зайдіть в адмін панель WordPress
2. Перейдіть до **Custom Fields > Field Groups**
3. Натисніть **Add New**

### Крок 2: Налаштуйте групу полів

**Назва групи:** Email Settings (або "Налаштування Email")

**Поля для додавання:**

#### Поле 1:
- **Field Label:** Notification Email 1
- **Field Name:** notification_email_1  
- **Field Type:** Email
- **Required:** Yes
- **Default Value:** sales@tivacleaners.com

#### Поле 2:
- **Field Label:** Notification Email 2
- **Field Name:** notification_email_2
- **Field Type:** Email  
- **Required:** No
- **Default Value:** (залишити пустим)

#### Поле 3:
- **Field Label:** Notification Email 3
- **Field Name:** notification_email_3
- **Field Type:** Email
- **Required:** No  
- **Default Value:** (залишити пустим)

### Крок 3: Налаштуйте розташування

В розділі **Location** встановіть:
- **Show this field group if:** Page is equal to Front Page

(Або виберіть конкретну сторінку, наприклад Contact Page)

### Крок 4: Опублікуйте групу полів

Натисніть **Publish** щоб зберегти налаштування.

### Крок 5: Заповніть email адреси

1. Перейдіть до **Pages > Home** (або яку сторінку вибрали)
2. Прокрутіть вниз до розділу "Email Settings"
3. Заповніть потрібні email адреси
4. Оновіть сторінку

---

## Варіант 2: Створення власної сторінки налаштувань

Якщо ви хочете зробити окрему сторінку налаштувань без ACF Pro, можна створити кастомну сторінку.

### Додайте цей код в functions.php вашої теми:

```php
// Створюємо власну сторінку налаштувань email
add_action('admin_menu', 'add_email_settings_page');
function add_email_settings_page() {
    add_options_page(
        'Email Settings',
        'Email Settings', 
        'manage_options',
        'email-settings',
        'email_settings_page_callback'
    );
}

function email_settings_page_callback() {
    ?>
    <div class="wrap">
        <h1>Email Settings</h1>
        <form method="post" action="options.php">
            <?php
            settings_fields('email_settings_group');
            do_settings_sections('email_settings_group');
            ?>
            <table class="form-table">
                <tr>
                    <th scope="row">Notification Email 1</th>
                    <td><input type="email" name="notification_email_1" value="<?php echo esc_attr(get_option('notification_email_1')); ?>" class="regular-text" required /></td>
                </tr>
                <tr>
                    <th scope="row">Notification Email 2</th>
                    <td><input type="email" name="notification_email_2" value="<?php echo esc_attr(get_option('notification_email_2')); ?>" class="regular-text" /></td>
                </tr>
                <tr>
                    <th scope="row">Notification Email 3</th>
                    <td><input type="email" name="notification_email_3" value="<?php echo esc_attr(get_option('notification_email_3')); ?>" class="regular-text" /></td>
                </tr>
            </table>
            <?php submit_button(); ?>
        </form>
    </div>
    <?php
}

// Реєструємо налаштування
add_action('admin_init', 'register_email_settings');
function register_email_settings() {
    register_setting('email_settings_group', 'notification_email_1');
    register_setting('email_settings_group', 'notification_email_2');
    register_setting('email_settings_group', 'notification_email_3');
}
```

---

## Як це працює

### Для Варіанту 1 (ACF на сторінці):
Код отримує поля з головної сторінки або обраної сторінки.

### Для Варіанту 2 (власна сторінка):
Код отримує налаштування з WordPress options.

Якщо поля не налаштовані або пусті, система використовує стандартні email адреси як fallback.

Всі email адреси автоматично валідуються функцією `is_email()` WordPress. 